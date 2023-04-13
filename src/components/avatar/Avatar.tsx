import '../../style/components/Avatar.scss';
import type { CSSProperties } from 'react';
import { useState, useEffect, forwardRef } from 'react';
import { joinClasses, str2Hex, getInitials, darkOrLight } from '../../utils';
import { parseSize } from './utils';

export interface AvatarProps {
  src?: string | any
  alt?: string
  title?: string
  size?: number | "xs" | "sm" | "md" | "lg"
  style?: CSSProperties
  loading?: undefined | 'lazy' | 'eager' // eager | lazy (Default browser = eager)
  decoding?: undefined | 'async' | 'sync' | 'auto' // sync | async | auto (Default browser = auto)
  draggable?: boolean
  className?: string
  bg?: string
  onError?: (e: any) => void
  onLoad?: (e: any) => void
}

export const Avatar = forwardRef<HTMLImageElement, any>(
  (
    {
      size = 'md',
      src,
      alt = ' ',
      title,
      style, 
      loading = 'lazy',
      decoding = 'async',
      draggable = false,
      className,
      bg, // DEFINE background-color
      onError,
      onLoad,
      ...etc
    }: AvatarProps,
    ref
  ) => {
    const [load, setLoad] = useState<boolean>(true);
    const [errorStyle, setErrorStyle] = useState({});
    const [initial, setInitial] = useState();
    const [errorClass, setErrorClass] = useState<string>('');

    const fixSize = parseSize(size);

    const parseView = () => {
      const trm = alt.trim();
      const color = bg ? bg.replace('#', '') : str2Hex(trm);
      setInitial(getInitials(trm) || '?');
      setErrorClass(darkOrLight(color) === 'dark' ? 'ava-light' : 'ava-dark');
      setErrorStyle({
        '--fs': 'calc(' + parseSize(size) + 'px / 2.25)',
        '--bg': '#' + color
      });
    }

    useEffect(() => {
      if(!src){
        parseView();
        setLoad(false);
      }
    }, [src, size, alt, bg]);

    const Load = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setLoad(false);
      setInitial(undefined);
      setErrorClass('');
      setErrorStyle({});
      onLoad?.(e);
    };

    const Err = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setLoad(false);

      if(!initial){
        parseView();
      }

      onError?.(e);

      return;
    };

    return (
      <img
        {...etc}
        ref={ref}
        decoding={decoding}
        loading={loading}
        width={fixSize}
        height={fixSize} 
        alt={alt}
        src={src}
        aria-label={initial}
        title={title}
        style={{
          ...errorStyle, 
          ...style,
        }} 
        className={joinClasses(
          'ava',
          load && 'ava-loader', 
          errorClass, 
          className
        )}
        draggable={!draggable ? false : undefined}
        onError={Err}
        onLoad={Load}
      />
    );
  }
);
