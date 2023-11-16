from datetime import date


while True:
    try:
        nome = input("Digite seu nome completo: ")
        if len(nome) == 0:
            print("Nome de usuário inválido. Tente novamente.")
            continue
        ano = int(input("Digite seu ano de nascimento (entre 1922 e 2021): "))
        if not (ano >= 1922 and ano <= 2023):
            print("Ano de nascimento inválido. Tente novamente.")
            continue
    except ValueError:
        print("O o ano de nascimento deve ser numérico. Tente novamente.")
        continue
    except KeyboardInterrupt:
        print("\nOperação interrompida pelo usuário.")
        break

    idade = date.today().year - ano
    print(f"Olá, {nome}! Você tem {idade} anos.")
    break
