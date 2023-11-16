def calculadora(num1, num2, operacao):
    if operacao == 1:
        return num1 + num2
    elif operacao == 2:
        return num1 - num2
    elif operacao == 3:
        return num1 * num2
    elif operacao == 4:
        if num2 != 0:
            return num1 / num2
        else:
            return "____Erro:divisão por zero impossível!___"
    else:
        return "___Operação inválida!___"

# Loop


while True:
    op = int(input('''
	    Escolha a operação(selecione o numero indicado):
     [1]Soma
     [2]Subtração
     [3]Multiplicação
     [4]Divisão
     [0] Para sair!
	'''))

    if op == 0:
        print("Você finalizou o processo.")
        break
    if op > 4:
        print("Voçe digitou um comando invalido")
        continue

    n1 = int(input("Escolha o primeiro número: "))
    n2 = int(input("Escolha o segundo número: "))

    result = calculadora(n1, n2, op)
    print("----------------------")
    print("O resultado é ", result)
    print("----------------------")
