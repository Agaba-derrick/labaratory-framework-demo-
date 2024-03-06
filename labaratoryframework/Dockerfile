FROM tomcat:latest

# Copy your WAR file to Tomcat's webapps directory
COPY target/labaratoryframework-1.0.0.war /usr/local/tomcat/webapps/

# Expose port (Tomcat default is 8080)
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
