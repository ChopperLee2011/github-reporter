const _issues = [{name: 'new issues1'}, {name: ' new issue2'}]
export default {
  // getIssues(cb){
  //   setTimeout(() => cb(_issues), 100)
  // }
  getIssues(){
    return _issues
  }
}