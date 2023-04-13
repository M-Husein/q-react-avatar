import '../../style/components/AvatarGroup.scss';
import type { ElementType, ReactNode } from 'react';
import { Children } from 'react';
import { joinClasses } from "../../utils";
import { parseSize } from './utils';

export interface AvatarGroupProps {
  As?: ElementType
  className?: string
  maxLength?: number
  size?: number | "xs" | "sm" | "md" | "lg"
  children: ReactNode
}

export function AvatarGroup({
  As = 'span',
  className,
  maxLength = 0,
  size = 'md',
  children,
}: AvatarGroupProps){
  const fixSize = parseSize(size);
  const childs = Children.toArray(children);
  const isMaxLength = !!maxLength && childs.length > maxLength;

  const parseDisplay = (isMaxLength ? childs.slice(0, maxLength) : childs).map((item: any, index: number) => {
    const { children: child, size: s, style, alt, className: cls, ...rest } = item.props;
    const fixAlt = child ? child.props.alt : alt;
    return {
      ...item,
      props: {
        ...rest, // item.props
        size: child ? undefined : size,
        style: {
          ...style,
          marginLeft: index > 0 ? `calc(-${fixSize}px / 2.75)`: null,
        },
        className: child ? joinClasses(child.props.className, cls) : cls,
        alt: fixAlt,
        title: fixAlt,
        children: child ? {
          ...child,
          props: {
            ...child.props,
            size,
          }
        }
        :
        undefined
      }
    }
  });

  return (
    <As
      role="group"
      className={joinClasses("avatar-group", className)}
    >

      {parseDisplay}

      {isMaxLength && (
        <span
          className="ava ava-rest"
          style={{
            width: fixSize,
            height: fixSize,
            fontSize: 'calc(' + fixSize + 'px / 2.25)',
            marginLeft: `calc(-${fixSize}px / 2.75)`
          }}
          title={childs.slice(maxLength).map((item: any) => item.props.children ? item.props.children.props.alt : item.props.alt).join('\n')}
        >
          +{childs.length - maxLength}
        </span>
      )}
    </As>
  );
}
