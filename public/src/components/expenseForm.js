import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

// const date= new Date(); using moment instead of native js date

const now = moment();


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : ' ',
            amount: props.expense ? (props.expense.amount / 100).toString() : ' ',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            callendarFocused: false,
            isFormComplete: true

        };
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



    onDescriptionChange(e) {
        const description = e.target.value
        this.setState(() => ({ description }))
    };

    onTextChange(e) {
        const note = e.target.value
        this.setState(() => ({ note }))
    };

    onAmountChange(e) {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }

    }

    onDateChange(createdAt) {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }

    }

    onFocusChange({ focused }) {
        this.setState(() => ({ callendarFocused: focused }))
    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ isFormComplete: false }))
        } else {
            this.setState(() => ({ isFormComplete: true }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                <form >
                    {!this.state.isFormComplete && <p>Please enter description and amount</p>}
                    <input type="text"
                        placeholder="description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input type="number"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        placeholder="amount" />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.callendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false} //this will make days in the past (from the current date point) available
                    />
                    <textarea
                        value={this.state.note}
                        onChange={this.onTextChange}
                        placeholder="Add some note for your expense"></textarea>
                    <button onClick={this.onSubmit} >{this.props.expense ? 'Edit Expense' : 'Add Expense'}</button>
                </form>
            </div>
        )
    }
}