/<!-- START INLINE -->/ {
    print
    s=1 # Start skip lines
}

/<!-- END INLINE -->/ {
    s=0 # Stop skip lines
    print "<style>"
    system("cat _site/css/critical.css")
    print "</style>"
}

!s # Print when skip is falsy
