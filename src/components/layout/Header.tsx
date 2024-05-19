import Button from '../common/button/button';
import './index.scss';
interface DivisorComponentProps {
    title: string,
    description: string,
    icon?: string,
    styles?: any,
    buttons?: { text: string, icon: string }[]
    bottom?: {
        icon: string,
        text: string,
    }
}
function LayoutHeaderComponent(props: DivisorComponentProps) {

    return (
        <div className='LayoutHeaderComponent' style={props.styles}>
            <div className='content'>
                <div className='top'>
                    {props.icon && <div className={`icon ${props.icon}`} />}
                    <div className='text'>
                        <div className='title'>{props.title}</div>
                        <div className='description'>{props.description}</div>
                    </div>
                </div>
                {props.buttons && <div className='buttons'>
                    {props.buttons && props.buttons.map((button, index) => {

                        return (
                            <Button key={index} {...button} />
                        );

                    })}
                </div>}
            </div>
            {
                props.bottom && <div className='bottom'>
                    {props.bottom.icon && <div className={`icon ${props.bottom.icon}`} />}
                    <div className='text'>{props.bottom.text}
                    </div>
                </div>
            }
        </div>

    );

}
export default LayoutHeaderComponent
