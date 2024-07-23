import {HeaderPage, UsersTable, AddEditUserForm} from "../../components/admin"
import {BasicModal} from "../../components/Common"
import { useEffect, useState } from "react"
import {useUser} from "../../hooks" 
import {Loader} from "semantic-ui-react"

export function UsersAdmin() {
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)
  const [refetch, setRefetch] = useState(false)

  const {loading, users, getUsers, deleteUser} = useUser()
  
  useEffect(() => {
    getUsers()
  }, [refetch])

  const openCloseModal = () => setShowModal((prevState) => !prevState)
  const onRefetch = () => setRefetch((prevState) => !prevState)

  const addUser = () => {
    setTitleModal("Nuevo usuario")
    setContentModal(<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch} />)
    openCloseModal()
  }

  const updateUser = (data) => {
    setTitleModal("Editar usuario")
    setContentModal(<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch} user={data} />)
    openCloseModal()
  }

  const onDeleteUser = async (data) => {
    const result = window.confirm(`¿Estás seguro de que quieres eliminar el usuario ${data.email}?`)
  
    if (result) {
      try {
        await deleteUser(data.id)
        onRefetch()
      } catch (error) {
        console.error(error)
      }
    }
  }
  
  return (
    <>
      <h1>Hueco</h1>
      <HeaderPage title="Usuarios" btnTitle="Nuevo usuario" btnClick={addUser} />

      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <UsersTable users={users} updateUser={updateUser} deleteUser={onDeleteUser} />
      )}

        <BasicModal show={showModal} onClose={openCloseModal} title={titleModal}>
          {contentModal}
        </BasicModal>
    </>
  )
}
