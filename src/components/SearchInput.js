import React from 'react'
import Select from 'react-select'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import NoSsr from '@material-ui/core/NoSsr'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'

const suggestions = [
  { label: 'France' },
  { label: 'Germany' },
  { label: 'Spain' },
  { label: 'Poland' }
].map((suggestion) => ({
  value: suggestion.label,
  label: suggestion.label
}))

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 15,
    backgroundColor: 'white'
  },
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto'
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2)
  },
  singleValue: {
    fontSize: 18
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  }
}))

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  )
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />
}


function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps }
  } = props

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps
        }
      }}
      {...TextFieldProps}
    />
  )
}

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  )
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  )
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  )
}


function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>
}


function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  )
}

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
}

export default function SearchInput(props) {
  const classes = useStyles()
  const theme = useTheme()
  const [single, setSingle] = React.useState(null)

  function handleChangeSingle(value) {
    setSingle(value)
    props.onChangeSearch(value)
  }


  const selectStyles = {
    input: (base) => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit'
      }
    })
  }

  return (
    <div className={classes.root}>
      <NoSsr>
        <Select
          isClearable
          classes={classes}
          styles={selectStyles}
          inputId="react-select-single"
          TextFieldProps={{
            label: 'Country',
            InputLabelProps: {
              htmlFor: 'react-select-single',
              shrink: true
            }
          }}
          placeholder="Search a country"
          options={suggestions}
          components={components}
          value={single}
          onChange={handleChangeSingle}
        />
      </NoSsr>
    </div>
  )
}
