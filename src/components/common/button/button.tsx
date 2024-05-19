import './button.scss';

// Function login props redux connect
import { setRoute, setStore } from '../../../store/actions';
import { connect } from 'react-redux';
import Stylize from '../../../stylize';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ButtonFilterWiflyComponent from './button-filter/button.filter.wifly.component';

const mapDispatchToProps = {
  setStore,
  setRoute,
};
const mapStateToProps = (state: any, ownProps: any) => state;

export interface ButtonComponentProps {
  setRoute: (s: any) => void;
  setStore: (s: any) => void;
  store: any;
  type: string;
  text?: string;
  icon?: string;
  tableItems?: any;
  label?: string;
  distinctSearchId?: string;
  id?: string;
  count?: number;
  filterType?:
  | 'search'
  | 'order'
  | 'searchOrder';
  children?: JSX.Element | JSX.Element[];
  bubble?: string;
  route?: string;
  item?: any;
  virgin?: boolean;
  title?: string;
  path?: string;
  content?: any;
  tooltip?: string;
  actions: any;
  styles?: any;
  onApplyFilters: (key: string, values: string[]) => void;
  onApplyOrder: (key: string, value: string) => void;
  activeFilters?: any[];
  activeOrder?: any[];
  development?: {
    status?: 'complete';
  };
  onPress?: () => void;
}
type Props = ButtonComponentProps;

function CommonButtonComponent(props: Props) {
  const navigation = useNavigate();
  const location = useLocation();
  const locationParams = useParams();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Is active path in location start
  const isActive = props?.path && location?.pathname?.startsWith(props?.path);
  return (
    <Stylize className="CommonButtonComponent" style={props.styles}>
      {
        //Create Button Filter if its of type
        (props.type === 'filter' || props.type === 'buttonFilter') && (
          <div className={`button ${isActive && 'active'}`}>
            <ButtonFilterWiflyComponent
              name={props.text}
              path={props.path}
              text={props.text}
              type ={props.type}
              label={props.label}
              tableItems={props.tableItems}
              content={props.content}
              distinctSearchId={props.distinctSearchId}
              icon={'la la-search'}
              count={props.count}
              id={props.id}
              filterType={props.filterType}
              onApplyFilters={props.onApplyFilters}
              onApplyOrder={props.onApplyOrder}
              activeFilters={props.activeFilters}
              activeOrder={props.activeOrder}
              
            />
          </div>
        )
      }
    </Stylize>
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommonButtonComponent);
