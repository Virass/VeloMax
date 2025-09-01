export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'path'> {
    width?: number | string;
    height?: number | string;
    mode?: 'fill' | 'stroke';
    color?: string;
}
