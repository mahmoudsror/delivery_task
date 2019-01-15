import React from 'react';
import {
  List,
  Datagrid,
  DateField,
  TextField,
  Filter,
  TextInput,
  ChipField,
  Edit,
SelectInput,
SimpleForm,
EditButton,
ShowButton
  
} from 'react-admin';
const TasksFilter = (props) => (
    <Filter {...props}>
        <TextInput label="courier" source="courier" />
        <TextInput label="status" source="status" />
        <TextInput label="driverName" source="driverName" />
    </Filter>
);
export const TasksList = (props) => (
    <List title ="Tasks" {...props}  filters={<TasksFilter/>} >
    
        <Datagrid >
            <TextField source="courier" />
            <TextField source="driverName" />
            <ChipField source="status" />
            <TextField source="description" />
            <DateField source="startedAt" />
            <DateField source="finishedAt" />

            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export const TaskEdit = (props) => {
    const choices = [
        { id: 'pending', status: 'pending' },
        { id: 'completed', status: 'completed' },
        { id: 'failed', status: 'failed' }
     ];
     const optionRenderer = choice => `${choice.status}`;
    return (
    <Edit title="Edit" {...props}>
        <SimpleForm>
        <SelectInput source="status" choices={choices} optionText={optionRenderer} />
        </SimpleForm>
    </Edit>
)};
