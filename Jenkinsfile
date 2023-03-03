pipeline {
    agent { label 'linux' }

    parameters {
            string(name: 'DOMAIN', description: 'Domain name for the website')
            string(name: 'GIT_REPO', description: 'URL of Git repository to clone')
        }

    stages {
        stage('Clone repository') {
            when {
                beforeAgent true
            }
            steps {
                git branch: 'main', url: 'https://github.com/acid-info/logos-site-builder'
            }
        }

        stage('Clone custom repository') {
            steps {
                git branch: 'main', url: "${params.GIT_REPO}"
            }
        }

        stage('Update environment') {
            steps {
                script {
                    def envFile = '.env'
                    def content = "CONTENT_SOURCE_TYPE=git\nCONTENT_SOURCE_URL=\"${params.GIT_REPO}\""
                    writeFile file: "${envFile}", text: "${content}"
                }
            }
        }

        stage('Build') {
            steps {
                sh 'yarn install'
                sh 'yarn build'
            }
        }

        stage('Publish Prod') {
            when { expression { env.GIT_BRANCH ==~ /.*master/ } }
            steps {
                sshagent(credentials: ['status-im-auto-ssh']) {
                sh "ghp-import -p public"
                }
            }
        }

        stage('Publish Devel') {
            when { expression { env.GIT_BRANCH ==~ /.*develop/ } }
            steps {
                sshagent(credentials: ['jenkins-ssh']) {
                sh """
                    rsync -e 'ssh -o ${SCP_OPTS}' -r --delete public/. \
                    ${env.DEV_HOST}:/var/www/${env.DEV_SITE}/
                """
                }
            }
        }
    }
}
