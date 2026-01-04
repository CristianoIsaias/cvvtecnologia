<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $assunto = $_POST['assunto'];

    $to = "crisano79@gmail.com";
    $subject = "Formulário de Contato";
    $message = "Nome: $nome\nEmail: $email\nTelefone: $telefone\nAssunto: $assunto";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        header("Location: index.html?msg=sucesso");
        exit();
    } else {
        echo "Erro ao enviar o formulário.";
    }
}
?>