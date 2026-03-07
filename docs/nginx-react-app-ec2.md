# Nginx config for React app (EC2)

Use this on the EC2 instance so Nginx serves the app from `/var/www/react-app` (where the deploy workflow extracts the build).

## On the EC2 instance

### 1. Edit Nginx config

```bash
sudo nano /etc/nginx/nginx.conf
```

### 2. Update the `server` block

Set the `root` for `location /` (and optionally the 50x location) to `/var/www/react-app`:

```nginx
server {
    listen 80;
    server_name your_domain_or_ip;   # Replace with your domain or public IP

    location / {
        root /var/www/react-app;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /var/www/react-app;
    }
}
```

### 3. Ensure directory exists and is readable

```bash
sudo mkdir -p /var/www/react-app
sudo chown -R nginx:nginx /var/www/react-app
# Or if the web user is www-data: sudo chown -R www-data:www-data /var/www/react-app
```

### 4. Test and reload Nginx

```bash
sudo nginx -t && sudo systemctl reload nginx
```

---

## One-liner (sed) option

If the current `root` is exactly `root /usr/share/nginx/html;` in both places:

```bash
sudo sed -i 's|root /usr/share/nginx/html;|root /var/www/react-app;|g' /etc/nginx/nginx.conf
sudo nginx -t && sudo systemctl reload nginx
```

Then confirm:

```bash
grep -n "root " /etc/nginx/nginx.conf
```

You should see `root /var/www/react-app;` for the app and the 50x location.
