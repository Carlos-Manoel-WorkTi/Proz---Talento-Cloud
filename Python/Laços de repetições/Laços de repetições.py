# Desafio 1
for andar in range(1, 21):
    if andar == 13:
        continue
    print(f"Andar {andar}")

# Desafiio 2
print("")
print("Usando outro loop em forma decrescente")
print("")

total = 0
while total != 20:
    if total == 13:
        total += 1
        continue
    print("Andar ", 20-total)
    total += 1
print("")
print("Outra forma")
print("")

total = 0
while True:
    if total == 13:
        total += 1
        continue
    if total == 20:
        break
    print("Andar ", 20 - total)
    total += 1
