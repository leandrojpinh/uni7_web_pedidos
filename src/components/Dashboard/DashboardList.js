import React from 'react'
import DashboardListRow from './DashboardListRow'

const DashboardList = ({ dashboard }) => {
    
    return (
        <div>
            {dashboard.map(dash => (
                <DashboardListRow key={dash.id} dashboard={dash} />
            ))}
        </div>
    )

}

export default DashboardList
