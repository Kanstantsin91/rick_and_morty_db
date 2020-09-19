import React from "react";
import { connect } from "react-redux";
import { setCharactersThunk, setLocationsThunk } from "../../actions/actions";
import './Paginator.css';

const Paginator = (props) => {
    const {
      nextPageUrl,
      prevPageUrl,
      currentPage,
      pageCount,
      getNextPage,
      getPrevPage,
      flag
    } = props; 
    return (
      <div className="Paginator">
        {prevPageUrl && (
          <button onClick={() =>{ getPrevPage(prevPageUrl, flag) }}>Prev</button>
        )}
        <span>{currentPage} of {pageCount}</span>
        {nextPageUrl && (
          <button onClick={() => getNextPage(nextPageUrl, flag)}>Next</button>
        )}
      </div>
    );
  };
  
  const mapStateToProps = (state) => ({
    nextPageUrl: state.paginator.nextPageUrl,
    prevPageUrl: state.paginator.prevPageUrl,
    pageCount: state.paginator.pageCount,
    currentPage: state.paginator.currentPage,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    getNextPage: (nextPageUrl, flag) => { if(flag === 'locations'){dispatch(setLocationsThunk(nextPageUrl))} else dispatch(setCharactersThunk(nextPageUrl))},
    getPrevPage: (prevPageUrl, flag) => { if(flag === 'locations'){dispatch(setLocationsThunk(prevPageUrl))} else dispatch(setCharactersThunk(prevPageUrl))},
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Paginator);
