import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef, useState, type ReactNode, type ComponentPropsWithoutRef, type CSSProperties } from 'react';
import gsap from 'gsap';

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  customClass?: string;
}

const cardBaseStyle: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: 20,
  border: '1px solid rgba(212, 162, 0, 0.25)',
  background: '#121622',
  boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 25px rgba(212, 162, 0, 0.1)',
  transformStyle: 'preserve-3d',
  willChange: 'transform',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  boxSizing: 'border-box',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, className, style, ...rest }, ref) => (
  <div ref={ref} {...rest} style={{ ...cardBaseStyle, ...style }} className={`card ${customClass ?? ''} ${className ?? ''}`.trim()} />
));
Card.displayName = 'Card';

interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (i: number, distX: number, distY: number, total: number): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLDivElement | null, slot: Slot, skew: number) => {
  if (!el) return;
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true,
  });
};

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [query]);
  return matches;
}

interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: 'elastic' | 'linear';
  children: ReactNode;
}

export const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children,
}) => {
  const isTablet = useMediaQuery('(max-width: 768px)');
  const isPhone = useMediaQuery('(max-width: 480px)');
  const childArr = useMemo(() => Children.toArray(children), [children]);
  const maxIndex = Math.max(0, childArr.length - 1);
  const stackOffsetX = (maxIndex * cardDistance) / 2;
  const stackOffsetY = (maxIndex * verticalDistance) / 2;
  const mobileScale = isPhone ? 0.75 : 0.85;

  const containerStyle: CSSProperties = {
    position: 'absolute',
    top: '-35%',
    left: '70%',
    transform: `translate(-50%, -50%) scale(${isTablet ? (isPhone ? 0.5 : 0.65) : 1})`,
    transformOrigin: 'center center',
    perspective: 900,
    overflow: 'visible',
  };

  const config =
    easing === 'elastic'
      ? {
        ease: 'elastic.out(0.6,0.9)',
        durDrop: 2,
        durMove: 2,
        durReturn: 2,
        promoteOverlap: 0.9,
        returnDelay: 0.05,
      }
      : {
        ease: 'power1.inOut',
        durDrop: 0.8,
        durMove: 0.8,
        durReturn: 0.8,
        promoteOverlap: 0.45,
        returnDelay: 0.2,
      };
  const refs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | undefined>(undefined);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front]?.current;
      if (!elFront) return;

      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx]?.current;
        if (!el) return;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        'return'
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease,
        },
        'return'
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover && container.current) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) => {
    if (isValidElement(child)) {
      const childProps = child.props as Record<string, any>;
      return cloneElement(child as React.ReactElement<any>, {
        key: i,
        ref: refs[i],
        style: { width, height, ...(childProps.style ?? {}) },
        onClick: (e: React.MouseEvent) => {
          childProps.onClick?.(e);
          onCardClick?.(i);
        },
      });
    }
    return child;
  });

  return (
    <div ref={container} className="card-swap-container" style={{ width, height, ...containerStyle }}>
      {rendered}
    </div>
  );
};

export default CardSwap;
