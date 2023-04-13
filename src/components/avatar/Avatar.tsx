import '../../style/components/Avatar.scss';
import type { CSSProperties } from 'react';
import { useState, forwardRef } from 'react';
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
    let errStyle = {},
        initName,
        errClass = '',
        trm = alt.trim(),
        color = '',
        initLoad = true;

    const fixSize = parseSize(size);

    const setDarkLight = (c: string) => darkOrLight(c) === 'dark' ? 'ava-light' : 'ava-dark';

    if(!src){
      color = bg ? bg.replace('#', '') : str2Hex(trm);
      errStyle = {
        '--fs': 'calc(' + fixSize + 'px / 2.25)',
        '--bg': '#' + color
      };
      initName = getInitials(trm);
      errClass = setDarkLight(color);
      initLoad = false;
    }

    const [load, setLoad] = useState<boolean>(initLoad);
    const [errorStyle, setErrorStyle] = useState(errStyle);
    const [initial, setInitial] = useState(initName);
    const [errorClass, setErrorClass] = useState<string>(errClass);

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
        color = bg ? bg.replace('#', '') : str2Hex(trm);
  
        setInitial(getInitials(trm));
        setErrorClass(setDarkLight(color));
        setErrorStyle({
          '--fs': 'calc(' + fixSize + 'px / 2.25)',
          '--bg': '#' + color
        });
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
