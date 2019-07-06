import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

export default props => (
    <ReduxToastr
        timeOut={3000}
        newestOnTop={true}
        preventDuplicates={true}
        position='bottom-left'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar
    />
)
