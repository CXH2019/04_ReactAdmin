import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class Add extends Component{
	static propTypes ={
		addComment:PropTypes.func.isRequired
	}
	state={
		username:'',
		content:''
	}
	handleClick =() =>{
		const comment = this.state
		this.props.addComment(comment)
		this.setState({
			username:'',
			content:''
		})
		
	}
	nameHandleClick =(event) =>{
		const username = event.target.value
		this.setState({username})
	}
	contentHandleClick =(event) =>{
		const content = event.target.value
		this.setState({content})
	}
	noSubmit =(event) =>{
		event.preventDefault()
	}
	render(){
		const {username ,content} = this.state
		return(
		  <div className="col-md-4">
		    <form className="form-horizontal" onSubmit={this.noSubmit}>
		      <div className="form-group">
		        <label>用户名</label>
		        <input type="text" className="form-control" placeholder="用户名" value={username} onChange={this.nameHandleClick}/>
		      </div>
		      <div className="form-group">
		        <label>评论内容</label>
		        <textarea className="form-control" rows="6" placeholder="评论内容" value={content} onChange={this.contentHandleClick}></textarea>
		      </div>
		      <div className="form-group">
		        <div className="col-sm-offset-2 col-sm-10">
		          <button className="button" className="btn btn-default pull-right" onClick={this.handleClick} >提交</button>
		        </div>
		      </div>
		    </form>
		  </div>
		)
	}
}