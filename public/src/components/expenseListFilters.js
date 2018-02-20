import React from 'react'
import { DateRangePicker } from 'react-dates'
import { connect } from 'react-redux'

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'


class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calendarFocused: null
        }

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);

    }

    onDatesChange({ startDate, endDate }) {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange(calendarFocused) {
        this.setState(() => ({ calendarFocused }))
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                    <h3 className="list-item__title">Search/Filter by name:</h3>
                        <input placeholder="Expense name/description"
                         className="text-input" type="text" value={this.props.filters.text}
                            onChange={(e) => {
                                this.props.dispatch(setTextFilter(e.target.value))
                            }}
                        />
                    </div>
                    <div className="input-group__item">
                    <h3 className="list-item__title">Sort by:</h3>
                        <select
                        className="select"
                            value={this.props.filters.sortBy}
                            onChange={(e) => {
                                if (e.target.value === 'date') {
                                    this.props.dispatch(sortByDate())
                                } else if (e.target.value === 'amount') {
                                    this.props.dispatch(sortByAmount())
                                }
                            }}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="content-container__item">
                    <h3 className="list-item__title">Filter by dates:</h3>
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => { false }}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        )
    }


}


const mapStateToProps = (state) => {
    return {
        filters: state.filters

    }
}

export default connect(mapStateToProps)(ExpenseListFilters)