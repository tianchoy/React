import React,{ ReactNode } from "react";

interface FormProps {
    onSubmit: (values: any) => void;
}

class Form extends React.Component<FormProps,any>{
    constructor(props: FormProps){
        super(props);
        this.state = {
            formData:{},
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
          formData: {
            ...this.state.formData,
            [e.target.name]: e.target.value,
          },
        });
      }
    
      handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onSubmit(this.state.formData);
      }
    render(): ReactNode {
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" onChange={this.handleChange} />
                    <input type="password" name="password" onChange={this.handleChange}  />
                    <button type="submit">提交</button>
                </form>
            </>
        )
    }
}

export default Form;