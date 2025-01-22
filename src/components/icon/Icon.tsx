import iconsSprite from '../../assets/images/sprite_intro.svg';

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    title?: string;
}

export const Icon = (props: IconPropsType) => {
    return (
<svg width={props.width || "50"} height={props.height || "50"} aria-labelledby={props.title ? `${props.iconId}-title` : undefined} xmlns="http://www.w3.org/2000/svg">
    {props.title && <title id={`${props.iconId}-title`}>{props.title}</title>}
    <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
</svg>
    );
};