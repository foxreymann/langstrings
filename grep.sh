#!/bin/bash
git grep  '[a-z1-5"]>[ ]*[A-Za-z]' src/templates/ > /tmp/langstrings
git grep  '"[A-Z]' src/templates/ >> /tmp/langstrings
git grep '^[ ]*[A-Za-z][A-Za-z .]*$' src/templates/ >> /tmp/langstrings
git grep  '[a-z1-5"]><%=.*%>[ ][a-zA-Z]' src/templates/ >> /tmp/langstrings
gg vCard src/templates/ >> /tmp/langstrings
