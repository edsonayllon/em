import { connect } from 'react-redux'

// components
import ModalComponent from './ModalComponent'

const mapStateToProps = ({ isLoading, showModal }, props) => ({
  isLoading,
  show: showModal === props.id
})

const Modal = connect(mapStateToProps)(ModalComponent)

export default Modal
