import React from 'react'

import styled from 'styled-components';
import Table from './Table'

const Styles = styled.div `
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`

const Dashboard = ()=> {
    const data = [
        {
            id:12345,
          name: 'test',
          email: 'test',
          rd:'Fri Mar 13 2020 13:38:29',
          ls:'Fri Mar 13 2020 13:38:29',
          status: 'Active'
        },
        {   
            id:12345,
          name: 'test',
          email: 'test',
          rd:'Fri Mar 13 2020 13:38:29',
          ls:'Fri Mar 13 2020 13:38:29',
          status: 'Active'
        },
        {   
            id:12345,
          name: 'test',
          email: 'test',
          rd:'Fri Mar 13 2020 13:38:29',
          ls:'Fri Mar 13 2020 13:38:29',
          status: 'Active'
        },
                                  
      ]
    
      const columns = [
        {
            Header: 'ID',
            accessor: 'id'
          },
        {
          Header: 'Name',
          accessor: 'name'
        }, {
          Header: 'Email',
          accessor: 'email'
        }, {
          Header: 'Registration date',
          accessor: 'rd'
        }, 
        {
            Header: 'Last seen',
            accessor: 'ls'
          },
        {
          Header: 'Status',
          accessor: 'status'
        }
      ]
    
    return (
        
        <Styles>
      <Table
        data={data}
        columns={columns}
      />
    </Styles>
    )
}



export default Dashboard
