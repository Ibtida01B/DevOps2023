pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        // Add your build steps here
        // For example, you can use Node.js to build your application:
        sh 'npm install' // Install dependencies
        sh 'npm run build' // Build the application
      }
    }

    stage('Test') {
      steps {
        // Add your test steps here
        // For example, you can use a testing framework like Mocha:
        sh 'npm run test' // Run tests
      }
    }

    stage('Deploy') {
      steps {
        // Add your deployment steps here
        // For example, you can use Docker to build and deploy containers:
        sh 'docker build -t your-image-name .'
        sh 'docker run -d -p 8080:8080 your-image-name'
      }
    }
  }
}
