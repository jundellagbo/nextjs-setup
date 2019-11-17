import { Button } from 'react-bootstrap'
import PulseLoader from 'react-spinners/PulseLoader';

const FButton = props => {
    const getProps = {...props, loading: ``}
    return (
        <Button {...getProps} disabled={props.loading} className={`f-btn btn-loader ${getProps.className} ${props.variant == 'primary' ? 'f-btn-primary' : 'f-btn-secondary'}`}>
            <div className={'btn-loading'} style={{ opacity: `${props.loading ? 1 : 0}` }} className={`btn-loading`}>
                <PulseLoader sizeUnit={"px"} size={10} color={props.variant == 'primary' ? '#ffffff' : '#E76D49'} loading={true} />
            </div>
            <span style={{ opacity: `${props.loading ? 0 : 1}` }}>{props.children}</span>
        </Button>
    )
}

export default FButton