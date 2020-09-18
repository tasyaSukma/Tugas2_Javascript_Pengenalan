var number = 23515001
var nama = "tasya"
var statusPekerjaan = true
var namaDetail = ["tasya", "sukma", "maftuhah"]
var personIdentity = {firstName:"tasya" , lastName:"maftuhah", age:28}

console.log("nilai variabel ", number, "datatype ", typeof number)
console.log("nilai variabel ", nama, "datatype ", typeof nama)
console.log("nilai variabel ", statusPekerjaan, "datatype ",typeof statusPekerjaan)
console.log("nilai variabel ", namaDetail, "datatype ", typeof namaDetail)
console.log("nilai variabel ", personIdentity.firstName, personIdentity.lastName, personIdentity.age, "datatype ", typeof personIdentity)

namaDetail = null
console.log("nilai variabel ", namaDetail, "datatype ", typeof namaDetail)

personIdentity = undefined
console.log("nilai variabel ",personIdentity, "datatype ", typeof personIdentity)

