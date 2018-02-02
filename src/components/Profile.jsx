import React from 'react'
import { Modal, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vsible: false
        };
      }
    //   showModal = () => (e) => {
    //     e.preventDefault(); // 修复 Android 上点击穿透
    //     this.setState({
    //         vsible: true,
    //     });
    //   }
    //   hideModal = () => () => {
    //     this.setState({
    //         vsible: false,
    //     });
    //   }

    showModal= () => (e)=>{
        e.preventDefault(); // 修复 Android 上点击穿透
        alert('clicked')
        this.setState({
            vsible: true,
        });
    }
    hideModal= () => (e)=>{       
        this.setState({
            vsible: false,
        });
    }
    render() {
        return (
            <div>
                <h1>Modal</h1>
                <Button onClick={this.showModal()}>popup</Button>
                <WhiteSpace />
                <Modal
                popup
                visible={this.state.vsible}
                onClose={this.hideModal()}
                animationType="slide-up"
                >
                <List renderHeader={() => <div>委托买入</div>} className="popup-list">
                    {['股票名称', '股票代码', '买入价格'].map((i, index) => (
                    <List.Item key={index}>{i}</List.Item>
                    ))}
                    <List.Item>
                    <Button type="primary" onClick={this.hideModal()}>买入</Button>
                    </List.Item>
                </List>
                </Modal>
            </div>
        )
    }
}