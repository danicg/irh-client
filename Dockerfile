#################################
# UI Loycus #
# docker.loycus.com/ui-loycus #
#################################

FROM nginx

LABEL maintainer "Daniel Caldera <dcaldera@loycus.com>"

# Copy our App
COPY nginx.conf /etc/nginx/nginx.conf
COPY www /usr/share/nginx/html

# Expose app ports
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
