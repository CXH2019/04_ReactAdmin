import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './item.css'
export default class Item extends Component{
	static propTypes={
		comment:PropTypes.object.isRequired,
		addDelete:PropTypes.func.isRequired,
		index:PropTypes.number.isRequired
	}
	handleDelete =() =>{
		const {comment,addDelete,index} = this.props
		if(window.confirm('确定删除'+(comment.username)+'的评论吗?')){
			addDelete(index)
		}
	}
	render(){
		const {comment} = this.props
		return(
		  <div>
		     <li className="list-group-item">
		      <div className="handle">
		        <a href="javascript:;" onClick={this.handleDelete}>删除</a>
		      </div>
		      <p className="user"><span >{comment.username}</span><span>说:</span></p>
		      <p className="centence">{comment.content}</p>
		    </li>
		  </div>
		)
	}
}