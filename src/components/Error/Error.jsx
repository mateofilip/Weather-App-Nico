import './Error.scss';
import Location from './undraw_my_current_location_re_whmt.svg';

export default function Error() {
  return (
    <div className="Error">
      <img src={Location} alt="illustration" />
      <p>
        In order for this app to function properly, location permits must be
        allowed!
      </p>
    </div>
  );
}
