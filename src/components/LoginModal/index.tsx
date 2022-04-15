import { Form, Image, Input, Modal } from "antd";
import { FunctionComponent, useContext } from "react";

import { AppContext } from "../../context/AppContext";


interface LoginModalProps {
    visible: boolean;
}
 
const LoginModal: FunctionComponent<LoginModalProps> = ({visible}) => {
    const { setUserName } = useContext(AppContext);
    const [form] = Form.useForm();

    const title = 'Login de atendimento';

    const _onOk = () => {
        form.submit()
    }


    return ( 
        <Modal okButtonProps={{ style: {borderRadius: '20px', width: '100px', backgroundColor: 'rgba(80, 123, 128, 0.5)'}}} visible={visible} title={title}  onOk={_onOk} closable={false} 
        cancelButtonProps={{style: {display: 'none'}}} >
            <Form  form={form} onFinish={(values) =>  setUserName(values.userName)} >
                <Form.Item name="userName" label="Nome usuário"required>
                    <Input style={{borderRadius:'20px', backgroundColor: 'rgb(231, 240, 219)'}} className="login-modal"/>
                </Form.Item>
            </Form>
        </Modal>
     );
}
 
export default LoginModal;