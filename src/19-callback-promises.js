function upload () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("02 - upload concluido")
      resolve()
    }, 2000)
  })
}

async function uploadDeFoto () {
  console.log("01 - iniciando upload")
  await upload()
  console.log("03 - execução finalizada")
}

uploadDeFoto()