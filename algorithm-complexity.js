function countInversions(arr) {
  // Função auxiliar para dividir e conquistar
  function mergeSort(arr, temp, left, right) {
    let invCount = 0
    if (left < right) {
      let mid = Math.floor((left + right) / 2)
      invCount += mergeSort(arr, temp, left, mid)
      invCount += mergeSort(arr, temp, mid + 1, right)
      invCount += merge(arr, temp, left, mid, right)
    }
    return invCount
  }

  // Função auxiliar para fundir e contar inversões
  function merge(arr, temp, left, mid, right) {
    let invCount = 0

    let i = left // Índice para a metade esquerda do vetor
    let j = mid + 1 // Índice para a metade direita do vetor
    let k = left // Índice para o vetor temporário

    // Enquanto houver elementos em ambas as metades
    while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) {
        temp[k++] = arr[i++]
      } else {
        temp[k++] = arr[j++]
        // Se arr[i] > arr[j], então todos os elementos à esquerda de i são inversões com j
        invCount += mid - i + 1
      }
    }

    // Copiar os elementos restantes da metade esquerda (se houver)
    while (i <= mid) {
      temp[k++] = arr[i++]
    }

    // Copiar os elementos restantes da metade direita (se houver)
    while (j <= right) {
      temp[k++] = arr[j++]
    }

    // Copiar os elementos do vetor temporário de volta para o vetor original
    for (let m = left; m <= right; m++) {
      arr[m] = temp[m]
    }

    return invCount
  }

  // Criar um vetor temporário para ajudar na ordenação
  let temp = new Array(arr.length)

  // Chamar a função de mergeSort recursivamente
  return mergeSort(arr, temp, 0, arr.length - 1)
}

// Exemplo de uso
let arr = [1, 20, 6, 4, 5]
console.log('Número de inversões:', countInversions(arr)) // Saída: 5
