pipeline {
  agent {
    label 'dcpm'
  }
  environment {
    DOCKER_USER = 'hams'
    DOCKER_PASS = credentials('docker-pass')
  }
  stages {
    stage('prepare') {
      parallel {
        stage('skip ci') {
          steps {
            script {
              if (sh(script: "git log -1 --pretty=%B | fgrep -ie '[skip ci]' -e '[ci skip]'", returnStatus: true) == 0) {
                currentBuild.result = 'NOT_BUILT'
                error 'Aborting because commit message contains [skip ci]'
              }
            }
          }
        }
        stage('install') {
          steps {
            sh """
              sh ~/.bashrc
              yarn
            """
          }
        }
      }
    }
    stage('push image') {
      steps {
        sh """
          docker login -u $DOCKER_USER -p $DOCKER_PASS
          docker build -t mm-ci --build-arg GIT_COMMIT=$GIT_COMMIT .
          docker tag mm-ci hams/mm:$GIT_COMMIT
          docker push hams/mm:$GIT_COMMIT
        """
        script {
          try {
            sh "docker system prune -a -f --volumes"
          } catch (error) {
            echo "no need to panic, this is fine :thumbsup_all:"
          }
        }
      }
    }
    stage('deploy stage') {
      agent { label 'deployer'}
      steps {
        sh """
        export COMPOSE_PROJECT_NAME=mm_stage
        export TAG=$GIT_COMMIT
        docker-compose -f docker-compose.stage.yml stop
        docker-compose -f docker-compose.stage.yml rm -f
        docker-compose -f dc.stage.yml pull
        docker-compose -f dc.stage.yml up -d
      """
      }
    }
    stage('deploy prod') {
      when { branch 'master'}
      agent { label 'deployer'}
      steps {
        sh """
        export COMPOSE_PROJECT_NAME=mm_prod
        export TAG=$GIT_COMMIT
        docker-compose stop
        docker-compose rm -f
        docker-compose pull
        docker-compose up -d
      """
      }
    }
  }
  post {
    success {
      echo 'I succeeeded!'
    }
    failure {
      echo 'I failed :('
    }
    cleanup {
      deleteDir()
    }
  }
}

