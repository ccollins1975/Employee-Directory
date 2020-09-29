import React, {
  Component
} from "react";
import Jumbotron from "./components/Jumbotron";
import Searchbar from "./components/Searchbar";
import API from "./utlis/API.js"
class App extends Component {
  state = {
    users: [],
    shadowUsers: []
  }

  componentDidMount() {
    API.getusers().then(result => {
      console.log(result.data.results)
      this.setState({
        users: result.data.results,
        shadowUsers: result.data.results
      })
    })
  }

  handleSearch = event => {
    let currentSearch = event.target.value.toLocaleLowerCase().split("")
    if(currentSearch.length === 0){
      this.setState({
        users: this.state.shadowUsers
      })
    }else{

      const filteredUsers = this.state.shadowUsers.filter(employee => {
        const fullName = (`${employee.name.first} ${employee.name.last}`).toLocaleLowerCase().split("")
        const comparisonArray = [];
        for(let i = 0; i<currentSearch.length; i++){
          comparisonArray.push(fullName[i])
        }
        console.log(comparisonArray.join(""), currentSearch.join(""))
        return comparisonArray.join("") === currentSearch.join("")
      })

      this.setState({
        users: filteredUsers
      })
    }

  }


  render() {
    return (
      <div className="container">
        <Jumbotron />
        <Searchbar handleSearch={this.handleSearch} />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users ?
              this.state.users.map(user => {
                return (
                  <tr key={user.id.value}>
                    <td><img src={user.picture.thumbnail} alt={user.name.first}></img></td>
                    <td>{user.name.first} {user.name.last}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.dob.date}</td>
                  </tr>
                )
              }
               
              ) : null
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;