resource "aws_security_group" "bymiles-security-group" {
  description = "A security group"
  vpc_id      = "vpc-bb571bd3"
  name        = "bymiles-security-group"

  ingress {
    protocol  = "tcp"
    from_port = 32768
    to_port   = 61000
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group_rule" "ingress" {
  security_group_id = "${aws_security_group.bymiles-security-group.id}"
  type              = "ingress"
  protocol          = "TCP"
  from_port         = 80
  to_port           = 80
  cidr_blocks       = ["0.0.0.0/0"]
}