import { Table } from "antd"
import { User } from "screens/project-list/search-panel"
interface Project{
    id:string,
    name:string,
    personId:string
}
interface ListProps{
    list: Project[],
    users: User[]
}


export const List = ({users,list}:ListProps)=>{
    const columns = [
        {
          title: 'id',
          dataIndex: 'id',
        },
        {
          title: '名称',
          dataIndex: 'name',
          sorter: (a:Project,b:Project) => a.name.localeCompare(b.name)
        },
        {
          title: '负责人',
          render(project:Project){
              return <span>{users.find(user => user.id === project.personId)?.name || '未知'}</span> 
          }
        },
      ];
    return <Table rowKey={'id'} pagination = {false} columns={columns} dataSource={list}>

    </Table>
    
}