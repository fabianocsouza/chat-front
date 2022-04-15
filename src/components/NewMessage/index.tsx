import { Button, Input } from "antd";
import { FunctionComponent, useState } from "react";

interface NewMessageProps {
    onSubmit: (message: string) => void;
}

const NewMessage: FunctionComponent<NewMessageProps> = ({onSubmit}) => {
    const [message, setMessage ] = useState<string>('');

    const _onSubmit = () => {
        if(message){
            onSubmit(message);
            setMessage('');
        }
        
    }
  return (
    <Input.Group compact >
      <Input
        style={{ width: "calc(100% - 70.5px)",  backgroundColor: 'rgb(231, 240, 219)'}}
        onPressEnter={_onSubmit}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digitar aqui a sua ocorrência"
      />
      <Button style={{backgroundColor: 'rgba(80, 123, 128, 0.5)'}} type="primary" onClick={_onSubmit} >Enviar</Button>
    </Input.Group>
  );
};

export default NewMessage;
