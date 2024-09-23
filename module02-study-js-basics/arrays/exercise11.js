names = ["zehra", "şima", "ayşe", "ali", "fatma", "şule"]
console.log(names)
names.sort()
console.log(names)
names.sort((x, y) => x.localeCompare(y, "tr"))
console.log(names)

