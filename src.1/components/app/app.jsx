import React,{Component} from 'react'
import Add from '../add/add'
import List from '../list/list'
export default class App extends Component{
	state={
		comments:[
		  {username:'Json',content:'React太难了'},
		  {username:'Tom',content:'React还好吧'}
		]
	}
	addComment =(comment) => {
		const {comments} = this.state
		comments.unshift(comment)
		this.setState({comments})
	}
	addDelete =(index) =>{
		const {comments} = this.state
		comments.splice(index,1)
		this.setState({comments})
	}
	render(){
		const {comments} = this.state
		return(
		  <div>
		    <header className="site-header jumbotron">
		      <div className="container">
		        <div className="row">
		          <div className="col-xs-12">
		            <h1>请发表对React的评论</h1>
		          </div>
		        </div>
		      </div>
		    </header>
		    <div className="container">
		      <Add addComment={this.addComment} />
		      <List comments={comments} addDelete={this.addDelete}/>
		    </div>
		  </div>
		)
	}
}