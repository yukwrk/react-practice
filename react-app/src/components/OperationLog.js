import React from 'react'

const OperationLog = ({operationLog}) => {
    return (
        <tr>
            <th>{operationLog.description}</th>
            <th>{operationLog.operatedAt}</th>
        </tr>
    )
}

export default OperationLog