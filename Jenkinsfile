pipeline{
    agent any
        stages{
            stage('Clone Repository'){
                steps{
                    branch:main
                    url:https://github.com/Kaamesh248/to-do-list
                }
            }
            stage('Install dependencies'){
                steps{
                    bat 'npm install'
                }
            }
            stage('Build React Application'){
                steps{
                    bat 'npm run build'
                }
            }
            stage('Successfull'){
                steps{
                    echo 'Build Successfull'
                }
            }
        }
}