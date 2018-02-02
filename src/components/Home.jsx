import React from 'react'
import { Tabs, Toast, Modal,InputItem, Button, WhiteSpace } from 'antd-mobile'
import {connect} from 'react-redux'
import { fetchPosts } from '../redux/actions/index'


import './Home.css'

// const TabPane = Tabs.TabPane;


class Home extends React.Component {

    constructor(props){
        super(props)
        
        this.state={vsible : false}
    }
    componentWillMount(){
        
        console.log(this.popup,'this.popup from willmount')
        console.log(this.vsible)
        
    }

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(fetchPosts())
        console.log(this.popup,'this.popup from didmount')        
        
    }

    popShow = ()=>{
        this.setState({
            vsible:true
        })
    }
    popHide = ()=>{
        this.setState({
            vsible:false
        })
    }

    componentWillReceiveProps(nextprops){
        // Toast.info('propsUpdate')
        console.log(this.popup,'this.popup from willreceiveprops')        
        
    }
    
    render() {
        console.log(this.popup,'this.popup from render')        
        
        return (
            <div>
                <h1>Home Component</h1>
                <WhiteSpace />
                {/* <Tabs defaultActiveKey="1" >
                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs> */}
                <Tabs tabs={[
                        { title: 'First Tab', key:'1' },
                        { title: 'Second Tab', key:'2'},
                    ]}
                    initialPage="1"
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { const {dispatch} = this.props;dispatch(fetchPosts()); }}
                >
                    <div>
                        Content of first tab
                    </div>
                    <div>
                        Content of second tab
                    </div>
                </Tabs>
                <WhiteSpace />
                {/* Toast.success(content, duration, onClose, mask)

                Toast.fail(content, duration, onClose, mask)

                Toast.info(content, duration, onClose, mask)

                Toast.loading(content, duration, onClose, mask)

                Toast.offline(content, duration, onClose, mask) */}

                <button onClick={ () => {Toast.success('success')} }>success</button>
                <button onClick={ () => {Toast.fail('fail')} }>fail</button>
                <button onClick={ () => {Toast.info('info')} }>Info</button>
                <button onClick={ () => {Toast.loading('loading')} }>loading</button>
                <button onClick={ () => {Toast.offline('offline')} }>offline</button>
                <hr/>
                {/* <button onClick={ this.popShow() }>Modal Popup</button>
                <button onClick={ this.popHide() }>Modal hide</button>
                <Modal
                    popup
                    visible={this.state.vsible}
                    animationType="slide-up"
                    maskClosable={false}
                >
                    Content of PopUp
                </Modal> */}
                <WhiteSpace />
                <InputItem></InputItem>
                <Button>123</Button>
            </div>
            
        )
    }
}

function select(state){
    return {
        posts:state.posts
    }
}

export default connect(select)(Home)