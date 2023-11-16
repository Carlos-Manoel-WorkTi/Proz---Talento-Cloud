print('''
Use a função calculadora,passando três parâmetros.
Os dois primeiros serão os números da operação e o
terceiro sera a operação,a seguir há o número que
serve de indentificador para cada operação.

Ex: calculadora(2,2,1) Saida:2+2 = 4

[1]Soma
[2]Subtração
[3]Multiplicação
[4]Divisão ''');

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


# Exemplo de uso da função:
resultado = calculadora(2, 2, 1)  # Soma de 2 + 2
print("O resultado é: ", resultado)
