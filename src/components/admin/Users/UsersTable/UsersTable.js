import "./UsersTable.scss"
import {Table, Button, Icon} from "semantic-ui-react"
import {map} from "lodash"

export function UsersTable(props) {
    const {users, updateUser, deleteUser} = props

    return (
        <Table className="users-table-admin">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Username</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Nombre</Table.HeaderCell>
                    <Table.HeaderCell>Apellidos</Table.HeaderCell>
                    <Table.HeaderCell>Activo</Table.HeaderCell>
                    <Table.HeaderCell>Staff</Table.HeaderCell>
                    <Table.HeaderCell>Acciones</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {map(users, (user, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{user.username}</Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>{user.first_name}</Table.Cell>
                        <Table.Cell>{user.last_name}</Table.Cell>
                        <Table.Cell className="status">
                            {user.is_active ? <Icon name="check" /> : <Icon name="close" />}
                        </Table.Cell>
                        <Table.Cell className="status">
                            {user.is_staff ? <Icon name="check" /> : <Icon name="close" />}
                        </Table.Cell>
                        
                        <Actions user={user} updateUser={updateUser} deleteUser={deleteUser} />
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}

function Actions(props) {
    const {user, updateUser, deleteUser} = props

    return (
        <Table.Cell textAlign="right">
            <Button icon onClick={() => updateUser(user)}>
                <Icon name="pencil" />
            </Button>

            <Button icon negative onClick={() => deleteUser(user)}>
                <Icon name="close" />
            </Button>
        </Table.Cell>
    )
}
