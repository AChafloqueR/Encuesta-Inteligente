pipeline {
    agent any

    stages {
        stage('Clonar') {
            steps {
                echo 'Clonando repositorio...'
                checkout scm
            }
        }

        stage('Instalación') {
            steps {
                sh 'npm install'
            }
        }

        stage('Pruebas') {
            steps {
                sh 'npm test'
            }
        }
    }
}
